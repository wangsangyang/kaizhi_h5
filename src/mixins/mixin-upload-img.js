
export default {
    data () {
        return {
            UPLOAD_URL: process.env.UPLOAD_URL+'upload/upload',
            compressConfig: {
                width: 1200
            }
        }
    },
    methods: {
        onSelectFile(e){
            //console.log(e);
            let dataset = e.target.dataset;
            let filesArray = [];
            let target_files = e.target.files;
            //console.log(target_files);
            //console.log(typeof target_files);
            let files = {
                files: target_files,
                dataset: dataset,
            }
            this.beforeUpload(files);

            //把input的value值重置为空，是为了防止选取相同的图片不能触发change事件
            let inputFile = document.querySelectorAll('.inputFile');
            [].map.call(inputFile, (v, k)=>{
                v.value = '';
            });
        },
        async beforeUpload(files) {
            //console.log(files);
            files.compressResult = [];
            //console.log(files.files);
            //console.log('-------提交之前处理文件-------');
            //压缩图片
            //console.log(Object.keys(files.files));
            let keysArray = Object.keys(files.files);
            await keysArray.map(async (v, k)=>{
                await this.compressImage(files.files[k]).then((result)=>{
                    //console.log(result);
                    //console.log(1);
                    files.compressResult.push(result);
                    if(k+1==keysArray.length){
                        //console.log(2);
                        this.submitedUpload(files);
                    }
                }); 
            });
        },
        //压缩图片的方法
        compressImage(file, options){
            //console.log(file);
            return new Promise((resolve, reject)=>{
                let img_type = file.type;
                let img = new Image();
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e)=>{
                    //console.log(reader);
                    img.src = reader.result;
                    img.onload = ()=>{
                        let img_width = img.width;
                        let img_height = img.height;
                        //console.log(img_width);
                        //console.log(img_height);
                        let compress_w = options&&options.width?options.width:1200;//压缩的宽度
                        let compress_h = compress_w*img_height/img_width;//压缩的高度
                        let compress_quality = options&&options.quality?options.quality:0.7;//压缩质量
                        let base64;
                        //console.log(compress_h);
                        let canvas = document.createElement('canvas');
                        let context = canvas.getContext('2d');
                        if(img_width>compress_w){//如果宽度超过1000px，就压缩
                            canvas.width = compress_w;
                            canvas.height = compress_h;
                            context.drawImage(img, 0, 0, compress_w, compress_h);
                        }else{
                            canvas.width = img_width;
                            canvas.height = img_height;
                            context.drawImage(img, 0, 0);
                        }
                        if(img_type.indexOf('jpeg')!==-1){
                            console.log('jpeg jpg');
                            base64 = canvas.toDataURL('image/jpeg', compress_quality);
                        }else{
                            console.log('png');
                            base64 = canvas.toDataURL();
                        }
                        //console.log(base64);
                        let result = {
                            beforeCompress: {
                                file: file,
                                base64: reader.result,
                                img_width: img_width,
                                img_height: img_height
                            },
                            afterCompress: {
                                canvas: canvas,
                                context: context,
                                base64: base64,
                                img_width: compress_w,
                                img_height: compress_h
                            },
                        }
                        resolve(result);
                    }
                }
            });
        },
        //提交图片
        submitedUpload(files){
            //console.log(files);
            let params = {
                url: this.UPLOAD_URL,
                loading: {
                    text: '上传中...',
                    end: false,
                },
                data: {
                    type: 'base64',
                    tag: 'driver-public',
                    token: localStorage.getItem('uploadToken'),
                    name: files.compressResult[0].beforeCompress.file.name,
                    file: files.compressResult[0].afterCompress.base64,
                }
            }
            this.$http(params).then(response=>{
                //console.log(response);
                if(response.data.code===10000){
                    files.response = response.data.data;
                    this.completeUpload(files);
                }else{
                    //console.log(456);
                    this.$createDialog({
                        title: response.data.msg,
                        icon: 'cubeic-close'
                    }).show()
                }
            })
        },
    }
}
