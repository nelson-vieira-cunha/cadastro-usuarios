import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/usuario.service';
import { Usuario } from '../../models/usuario';



@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  desabilitarAlterar: boolean = true;

  constructor(
    public usuariosService: UsuariosService,
    public router: Router) { }

  listaPerfil: any[] = [{'codigo':'nel','descricao':'nelson'},{'codigo':'adri', 'descricao':'adriana'}]

  usuarios!: Usuario;
 // public selecionado: UsuarioFiltro;
  listaUsuarios$: Observable<Usuario[]> | undefined

  selecionado!: Usuario


  public operacao: string = ""
  //@Input() operacao!: any

  ngOnInit(): void {
    this.usuarios = new Usuario();
    this.operacao = "pesquisar"
   // this.pesquisarUsuarios()
  }

  public pesquisarUsuarios(){ 
   this.listaUsuarios$ = this.usuariosService.consultar()
    /* (data: {}) => {
     // let dat = Object.entries(data)
      this.listaUsuarios = data;
    })*/
}

selecionar(valor: Usuario){
  this.selecionado = valor
  if(valor.id != null){
    this.desabilitarAlterar = false
  }
}
incluir(){
  this.operacao = "incluir"
  this.router.navigate(['/tela-manter/incluir']);
}

salvarNovo(){
  this.incluir()
  this.limpar()
}

alterar(){
  this.operacao = "alterar"
  this.router.navigate(['/tela-manter/' + this.selecionado.id]);
}

public excluir(id: any): void{
  this.usuarios.id = this.selecionado.id
  this.usuariosService.excluir(this.usuarios.id).subscribe(data => {
    alert("Incluido com sucesso")
    this.pesquisarUsuarios()
  })
}

limpar(){
  this.usuarios = new Usuario()
}
}


