import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
  selectedFile = null;
  img_url;
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.img_url = event.target.result;
      console.log(this.img_url);
      this.img_array.push({ src: this.img_url, desc: "new Image" });
    };
    reader.readAsDataURL(this.selectedFile);
  }
  onUpload() {}
}
