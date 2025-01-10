import { Component, Input, OnInit, Self } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLinkActive } from '@angular/router';
import { UsuariosService } from 'src/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-tela-manter',
  templateUrl: './tela-manter.component.html',
  styleUrls: ['./tela-manter.component.css']
})
export class TelaManterComponent implements OnInit {

  operacao = "incluir"

  selecionado!: Usuario


  listaPerfil: any[] = [{'codigo':'nel','descricao':'nelson'},{'codigo':'adri', 'descricao':'adriana'}]
  usuario: Usuario = new Usuario();
  // public selecionado: UsuarioFiltro;
   listaUsuarios: Usuario[] = []

   id: any

   titulo: any

   @Input() op!:string
   //@Input() operacao: string = "";


   public formulario: FormGroup = new FormGroup({
    codigo: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120),
    ]),
    descricao: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
    complemento: new FormControl(null),
    formaPagamento: new FormControl(null, [Validators.required]),
  });

  constructor( public actRoute: ActivatedRoute,
    public usuariosService: UsuariosService,
    public router: Router) { }

  ngOnInit(): void {
   this.definiritulo()
  }

definiritulo(){
 this.id =  this.actRoute.snapshot.params['id'];
 if(this.id != undefined){
   this.operacao = 'alterar'
   this.titulo = "Alterar Usuário"
   this.usuario.id = this.id
   this.usuariosService.consultarId(this.usuario.id).subscribe(
    data => {
      this.usuario = (<Usuario>data);
    }
   )
 }else{
  this.operacao = 'incluir'
 this.titulo = "Incluir Usuário"
 }

 
}

selecionarTipo(valor: string){
  this.usuario.tipo = valor
}

  voltar(){
  this.router.navigate(['/tela-inicial']);
  }
  

  salvarNovo(){
    this.salvar()
    this.limpar()
  }

  limpar(){
    this.usuario = new Usuario()
  }
  


  salvar(){
    if (this.formulario.status === 'INVALID') {
    this.formulario.get('codigo')?.markAsTouched();
    this.formulario.get('descricao')?.markAsTouched();
    }
    this.usuariosService.incluir(this.usuario).subscribe((data:
      {}) => {
        alert("Incluido com sucesso")
    })
  }

  

}
