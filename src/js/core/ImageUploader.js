class ImageUploader {
  constructor(path = ImageUploader.getDefaultImage()){
    this._path = path;
    this.temp_path = ImageUploader.getDefaultTempPath();
  }

  get path(){
    return this._path;
  }

  set path(value){
    if(value !== undefined && typeof value === 'string'){
      this._path = value;
    } else {
      console.error('Enter a valid typo of value - String');
    }
  }

  createImage(e) {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
      return;

    let image = new Image();
    let reader = new FileReader();
    let vm = this;

    reader.onload = (e) => {
      this._path = e.target.result;
    };
    reader.readAsDataURL(files[0]);
  }


  removeImage(){
    this._path = '';
  }

  static getDefaultImage(){
    return 'svg/photo_user.svg';
  }

  static getDefaultTempPath(){
    return 'upload';
  }
}

export default ImageUploader;