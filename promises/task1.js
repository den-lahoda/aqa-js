function delayedLog(text, milliseconds) {
    setTimeout(() => {
      console.log(text);
    }, milliseconds);
  }
  
  delayedLog("Привіт через 3 сек: ", 3000);