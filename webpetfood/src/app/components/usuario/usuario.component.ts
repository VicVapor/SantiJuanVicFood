import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  usuarioList: any = [];
constructor(private usuarioService: UsuarioService) { }

getAllUsuarios() {
  this.usuarioService.getAllUsuariosData().subscribe((data: {}) => {
    this.usuarioList = data;
  });
  
}
ngOnInit() {
  this.getAllUsuarios();
}
}
