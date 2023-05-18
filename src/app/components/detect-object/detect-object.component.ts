import { Component, OnInit } from '@angular/core';
import './detect-object.js';
import 'ml5';


@Component({
  selector: 'app-detect-object',
  templateUrl: './detect-object.component.html',
  styleUrls: ['./detect-object.component.css'],
})
export class DetectObjectComponent implements OnInit{
  ngOnInit() {
    const toggleDetectingButton = document.getElementById('detectionAction');
    toggleDetectingButton.addEventListener('click', toggleDetecting);
    
  }
}
