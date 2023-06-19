import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
location1 : string = "Kitzbühel";
location1Text : string = "Kitzbühel is a small Alpine town east of Innsbruck, in the western Austrian province of Tyrol. It's a fashionable winter resort, known for the annual Hahnenkamm downhill race.";
location1Image : string = "/assets/kitzbuhel.jpg";
location2 : string = "Schladming";
location2Text : string = "Schladming is a small former mining town in the northwest of the Austrian state of Styria that is now a popular tourist destination.";
location2Image : string = "/assets/schladming.jpg";
}

// let destinations: {name : string; image : string, text : string}[] = [{
// name: "Kitzbühel",
// image: "assets/kitzbühel.jpg",
// text: "Kitzbühel is a small Alpine town east of Innsbruck, in the western Austrian province of Tyrol. It's a fashionable winter resort, known for the annual Hahnenkamm downhill race."
// },{
//   name: "Schladming",
// image: "assets/schladming.jpg",
// text: "Schladming is a small former mining town in the northwest of the Austrian state of Styria that is now a popular tourist destination."
// }]
