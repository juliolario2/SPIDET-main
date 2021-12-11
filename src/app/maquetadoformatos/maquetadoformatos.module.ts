import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquetadoformatosRoutingModule } from './maquetadoformatos-routing.module';
import { DatosgeneralesComponent } from './datosgenerales/datosgenerales.component';
import { JustificacionComponent } from './justificacion/justificacion.component';
import { ResumenComponent } from './resumen/resumen.component';
import { InfotecnicaComponent } from './infotecnica/infotecnica.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { HonorariosComponent } from './honorarios/honorarios.component';
import { RecursosmaterialesComponent } from './recursosmateriales/recursosmateriales.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BienesmueblesComponent } from './bienesmuebles/bienesmuebles.component';
import { ResumenderecursosComponent } from './resumenderecursos/resumenderecursos.component';
import { CurriculumvitaeComponent } from './curriculumvitae/curriculumvitae.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ErrorComponent } from './error/error.component';
import { Teseda69pidt03fiComponent } from './teseda69pidt03fi/teseda69pidt03fi.component';
import { EnclaperdivComponent } from './teseda69pidt03fi/enclaperdiv/enclaperdiv.component';
import { PerpoyectoComponent } from './teseda69pidt03fi/perpoyecto/perpoyecto.component';
import { NomevaluadoresComponent } from './teseda69pidt03fi/nomevaluadores/nomevaluadores.component';
import { ClavepoyComponent } from './teseda69pidt03fi/clavepoy/clavepoy.component';
import { CrigralevComponent } from './teseda69pidt03fi/crigralev/crigralev.component';
import { FaviproComponent } from './teseda69pidt03fi/favipro/favipro.component';




@NgModule({
    declarations: [

    DatosgeneralesComponent,
       JustificacionComponent,
       ResumenComponent,
       InfotecnicaComponent,
       CronogramaComponent,
       HonorariosComponent,
       RecursosmaterialesComponent,
       ServiciosComponent,
       BienesmueblesComponent,
       ResumenderecursosComponent,
       CurriculumvitaeComponent,
       ErrorComponent,
       Teseda69pidt03fiComponent,
       EnclaperdivComponent,
       PerpoyectoComponent,
       NomevaluadoresComponent,
       ClavepoyComponent,
       CrigralevComponent,
       FaviproComponent
  ],
  exports: [
    BienesmueblesComponent,
    CronogramaComponent,
    CurriculumvitaeComponent,
    DatosgeneralesComponent,
    HonorariosComponent,
    InfotecnicaComponent,
    JustificacionComponent,
    RecursosmaterialesComponent,
    ResumenComponent,
    ResumenderecursosComponent,
    ServiciosComponent,
    ErrorComponent
  ],
    imports: [
        CommonModule,
        MaquetadoformatosRoutingModule,
        ReactiveFormsModule
    ]
})
export class MaquetadoformatosModule { }
