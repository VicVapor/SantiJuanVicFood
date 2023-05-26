import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-detect-object',
  templateUrl: './detect-object.component.html',
  styleUrls: ['./detect-object.component.css'],
})
export class DetectObjectComponent implements OnInit /*, AfterViewInit*/ {
  /*@ViewChild('iframeRef', { static: true })
  iframeRef!: ElementRef<HTMLIFrameElement>;
*/

  logged: boolean = false;
  schedule = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    if (localStorage.getItem('logged') === '1') {
      this.logged = true;
    }
    this.userService.getUserInfo().subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }

  /*
  ngAfterViewInit() {
    // Agrega el event listener para escuchar los mensajes del iframe después de que se haya inicializado la vista
    const iframe = this.iframeRef.nativeElement;
    iframe.addEventListener('load', () => {
      iframe.contentWindow?.addEventListener(
        'message',
        this.handleMessage.bind(this),
        false
      );
      console.log('prueba antes de acabar el event', iframe);
    });
  }

  handleMessage(event: MessageEvent) {
    console.log('prueba 2');
    // Verifica que el mensaje provenga del iframe
    if (event.origin !== 'http://localhost:4200/detection') {
      return;
    }

    // Obtiene los datos enviados desde el iframe
    const data = event.data;
    console.log('data recibida:', data);

    if (data.command === 'cambiar-valor-variable') {
      // Muestra un mensaje en la consola sobre la orden recibida
      console.log('Se ha recibido una orden desde el iframe:', data.command);
    }
  }*/
}
