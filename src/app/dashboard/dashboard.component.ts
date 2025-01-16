import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone:false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = '';
  token: string = '';
  profileVisible: boolean = false;

  ngOnInit() {
    // Retrieve username and token from localStorage
    this.username = localStorage.getItem('username') || 'Username';
    this.token = localStorage.getItem('jwtToken') || 'Token';
  }

  toggleProfile() {
    this.profileVisible = !this.profileVisible;  // Toggle the profile display visibility
  }
}
