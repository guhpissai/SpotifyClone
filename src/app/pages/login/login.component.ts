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
  }

  handleLogin() {
    window.location.href = this.spotifyService.getUrlLogin()
  }
}
