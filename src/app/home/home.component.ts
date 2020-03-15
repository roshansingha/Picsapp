import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}
  selected_img: string;
  desc: string;
  img_array = [
    { src: "../../assets/inst3.jpg", desc: "Hills of california" },
    { src: "../../assets/inst5.jpg", desc: "Caribbean coco" },
    { src: "../../assets/insta4.jpg", desc: "London diaries" },
    { src: "../../assets/insta7.jpg", desc: "Red vegas" },
    { src: "../../assets/insta8.jpg", desc: "White heaven" },
    { src: "../../assets/insta6.jpeg", desc: "Friendship goals" }
  ];
  ngOnInit(): void {}
  loadPopup(a) {
    this.selected_img = a.src;
    this.desc = a.desc;
  }
}
