import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuariosService } from 'src/usuario.service';
import { TelaInicial } from './telainicial';


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

  usuarios!: TelaInicial;
 // public selecionado: UsuarioFiltro;
  listaUsuarios: any = [] 

  selecionado!: TelaInicial


  public operacao: string = ""
  //@Input() operacao!: any

  ngOnInit(): void {
    this.usuarios = new TelaInicial();
    this.operacao = "pesquisar"
   // this.pesquisarUsuarios()
  }

  public pesquisarUsuarios(){ 
   this.usuariosService.consultar().subscribe(
     (data: {}) => {
     // let dat = Object.entries(data)
      this.listaUsuarios = data;
    })
}

selecionar(valor: TelaInicial){
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
  this.usuarios = new TelaInicial()
}
}


