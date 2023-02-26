class Cronometro {
    constructor() {
      this._tempo = 0;
      this._cronometro = null;
      this._elementoCronometro = document.getElementById("cronometro2");
    }
  
    atualizarCronometro() {
      this._tempo++;
      var minutos = parseInt(this._tempo / 60);
      var segundos = this._tempo % 60;
      this._elementoCronometro.innerHTML =
        ("0" + minutos).slice(-2) + ":" + ("0" + segundos).slice(-2);
    }
  
    iniciarCronometro() {
      this._cronometro = setInterval(() => {
        this.atualizarCronometro();
      }, 1000);
    }
  
    pararCronometro() {
      clearInterval(this._cronometro);
      console.log("click");
    }
  
    zerarCronometro() {
      this._tempo = 0;
      this._elementoCronometro.innerHTML = "00:00";
      this.pararCronometro();
    }
  


  }
  
  const cronometro = new Cronometro();
  
  function iniciarCronometro() {
    cronometro.iniciarCronometro();
  }
  
  function pararCronometro() {
    cronometro.pararCronometro();
  }
  
  function zerarCronometro() {
    cronometro.zerarCronometro();
  }   