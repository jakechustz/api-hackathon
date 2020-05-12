class FrogApp{
  constructor(scrollDisplay) {
    this.scrollDisplay = scrollDisplay;
    this.handleGetCharactersError = this.handleGetCharactersError.bind(this);
    this.handleGetCharactersSuccess = this.handleGetCharactersSuccess.bind(this);
  }
  handleGetCharactersError(error) {
    console.log(error);
  }
  handleGetCharactersSuccess(chars) {
    this.scrollDisplay.updateChars(chars);
  }
  getChars() {
    $.ajax({
      method: "GET",
      data: {
        key: hpAPIKey,
      },
      url: "https://www.potterapi.com/v1/characters/",
      success: this.handleGetCharactersSuccess,
      error: this.handleGetCharactersError,
    })
    start() {
      this.getChars();
    }
  }
}
