import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.validateTokenUrlCallBack();
  }

  validateTokenUrlCallBack() {
    const token = this.spotifyService.getTokenUrlCallBack();
    console.log(token)
  }

  handleLogin() {
    window.location.href = this.spotifyService.getUrlLogin()
  }
}
