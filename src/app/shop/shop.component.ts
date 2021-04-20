import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  featureProduct: boolean = false
  featureProductDetails;
  productsInCart = [];
  products = [
    {
      product_name: "Microphone",
      image: "https://www.akg.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw90ca766d/AKG_C636.png",
      desc: "Compatible with Phones! We extra include 1 Lightning and Type C Adaptor, so you can conveniently enjoy recording songs on your iPhone and phones with type C port. ",
      moreInfo: "The Blue Yeti X is a state-of-the-art flagship USB microphone for professional-level gaming, Twitch streaming, podcasting and YouTube productions. With an all-new four-capsule condenser array inside, Yeti X delivers legendary Blue broadcast sound with greater focus and clarity than ever – in four versatile pickup patterns. An illuminated multi-function smart knob lets you monitor and adjust your voice level in real time, providing precise control over your audio stream. And, with Blue VO.CE, you can make Yeti X sound the way you want. Yeti X is the ultimate mic for today’s creators. Requires download and installation of Logitech G HUB.",
      price: "£129.99"
    },
    {
      product_name: "i-mac",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCQSIvpZbqzDZhnOCvpEufnHQZajgnwkM4hcR0du1mN2JTIlEsfE2_oRloxW-rkcFeJM&usqp=CAU",
      desc: "Apple iMac with Retina 5K display (27-inch, 8GB RAM, 256GB SSD Storage) (2020)",
      moreInfo: "This was a replacement for an older model purchased over 8 years ago to use as our main home computer. Wow! It’s so much quicker and the display is fantastic! Easy to transfer data from the old Mac even for a silver surfer and just as uncomplicated and easy to use. Very happy with how quickly it was delivered and packaged.",
      price: "£1,999"
    },
    {
      product_name: "KORG volca Bass",
      image: "https://images-na.ssl-images-amazon.com/images/I/810wlR2TonL._AC_SL1500_.jpg",
      desc: "Aggressive sounds that stand up to the drums; fat sounds that support the rhythm; funky sounds that generate a groove - the volca bass is an analog bassline groove box that has what you need for a wide range of bass lines.",
      moreInfo: "The volca rack 2x2 designed and built by SEQUENZ for KORG holds up to four volca modules. Two durable aluminium trays hold the four volca units securely in place. Easy-to-assemble design includes wooden side panels and aluminium frame. Neoprene bar provides surface grip to prevent the stand from sliding around",
      price: "£119"
    },
    {
      product_name: "Roland TR-6S Compact Drum Machine",
      image: "https://images-na.ssl-images-amazon.com/images/I/81YfKScBYSL._AC_SL1500_.jpg",
      desc: "Elevate your drum tracks, make beats on the go, and experience the joy of hands-on production. With the TR-6S, the sound of classic tracks, today's trends, and tomorrow's hits are always within reach.",
      price: "£306"
    },
    {
      product_name: "AKAI Professional MPK Mini MK3",
      image: "https://images-na.ssl-images-amazon.com/images/I/81OcnEezt8L._AC_SL1500_.jpg",
      desc: "Music Production and Beat Maker Essential – USB powered MIDI controller with 25 mini MIDI keyboard velocity-sensitive keys for studio production, virtual synthesiser control and beat production",
      moreInfo: "Complete Command of your Virtual Instruments and FX - 8 360-degree knobs assign to all your music studio plugins for mixing, tweaking synth controls and more. 1500+ Sounds and Everything You Need for Pro Production – Complete music production starter Kit including MPC Beats, six Virtual Instruments and 2GB of sound content",
      price: "£92"
    },
    {
      product_name: "KORG MA2-BLBK LCD Pocket Digital Metronome",
      image: "https://images-na.ssl-images-amazon.com/images/I/61aY%2B2%2Br7FL._AC_SL1200_.jpg",
      desc: "The MA-2 is a compact metronome that solidly covers all the basics with a broad tempo range and a rich variety of beats and rhythm patterns. The MA-2 also shows the beat in an innovative way that makes practising easier.",
      moreInfo: "The MA-2’s display is 30% larger than that of the previous model, drastically improving the visibility. Within the display, a digital needle moves between left and right, providing a visual indication of the beat in additional to the audible indication. A triangular icon shows the beat position and the timing at which the measure changes.",
      price: "£12.80"
    },
    {
      product_name: "Teenage Engineering OP-1 All-in-One Portable Synthesizer",
      image: "https://images-na.ssl-images-amazon.com/images/I/81v-rKP0%2BJL._AC_SL1500_.jpg",
      desc: "OP-1 is the all-in-one portable synthesizer, sampler and controller. with thirteen synthesizer engines, seven high quality effects and multiple routable LFO’s, you'll never hit the wall when it comes to creativity or finding the right sound for the job.",
      moreInfo: "with additional features like a built-in FM radio and an assignable G-force sensor for motion controlled effects, there is quite nothing like it. its modular architecture enables endless sound possibilities without making the workflow complicated or distracting. the compact design and real physical interface makes it inspiring to create music, no matter who you are or how experienced you are.",
      price: "£1,099"
    },
    {
      product_name: "Behringer TD-3-AM",
      image: "https://images-na.ssl-images-amazon.com/images/I/81Mu1RQuDnL._AC_SL1500_.jpg",
      desc: "Amazing Bass Line synthesizer with true analog circuitry for bass and groove sounds",
      moreInfo: "A very nice clone of the303 bass .avery thick and sqwelchy bass lines . Hooked up to my other synths . Very classic 90s acid style. A great product . Yes its light and its available in different colours . Dont be fooled by the build its very good . A bit confusing at first but as you read manual its simple.. theres you tube videos how to do your own tracks and shows you the power and diversity of product. This is my first beringher synth and am very happy with it. So if you want a good bass line synth look no further ",
      price: "£129"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onFeatureContentClicked(product) {
    this.featureProductDetails = product
    this.featureProduct = true;
    console.log(product)
  }

  onBackButtonClick(backInfo) {
    this.featureProduct = backInfo;
  }

  onAddToCartClick(addedProduct) {
    this.productsInCart.push(addedProduct);
  }

}
