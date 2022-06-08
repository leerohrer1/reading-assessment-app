import { Component, OnInit } from '@angular/core';
import {Test} from '../test';
import {TESTS} from '../test-data'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  tests = TESTS;
  
  constructor() {}

  ngOnInit(): void {}
}
