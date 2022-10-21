 import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
@Component({
  selector: "app-intro",
  templateUrl: "./intro.page.html",
  styleUrls: ["./intro.page.scss"]
})
export class IntroPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };
  slides = [
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Protected Logo",
      title: "La mejor manera de estar seguro",
      subTitle: "MIRÁ COMO FUNCIONA!",
      description: `Los mejores álbumes, las mejores canciones. Escucha y comparte en
        cualquier momento, a todas horas.`,
      icon: "warning"
    },
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Protected Logo",
      title: "Disfruta de nuestro reproductor",
      subTitle: "DE VIDEOS INCREÍBLES",
      description: `Precione este boton cuando se encuentre en peligro, tardara 5 segundos en enviar un mensaje con tu ubicación a tus contactos de confianza.`,
      icon: "alert"
    },
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Protected Logo",
      title: "Accede al exclusivo",
      subTitle: "MODO DEPORTE",
      description: `Crea una playlist basada en tu actividad física. <br />
        Ten reportes y acceso a lo que necesites, integrado ccon GPS!`,
      icon: "md-radio-button-on"
    }
  ];
  constructor(private router: Router, private storage: Storage) {}
  finish() {
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {}
}
