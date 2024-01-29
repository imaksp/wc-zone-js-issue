import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EthereumProvider } from '@walletconnect/ethereum-provider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'wc-zone-js-issue';

  async connectClick() {
    debugger;
    try {
      const provider = await EthereumProvider.init({
        projectId: '6e56925d35b71a3dec5f50a11923f356', // REQUIRED your projectId
        showQrModal: true, // REQUIRED set to "true" to use @walletconnect/modal
        optionalChains: [1, 137], // chains - required for optional namespaces
      });
      await provider.connect();
    } catch (error) {
      console.log('connect error: ', error);
    }
  }
}
