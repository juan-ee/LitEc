/*==============================================================*/
/* DBMS name:      MySQL 4.0                                    */
/* Created on:     13/12/2016 21:36:52                          */
/*==============================================================*/


drop table if exists AUTOR;

drop index RELATIONSHIP_1_FK on COMPRA;

drop table if exists COMPRA;

drop index RELATIONSHIP_4_FK on LIBRO;

drop table if exists LIBRO;

drop index RELATIONSHIP_3_FK on REL_COMPRA_LIBRO;

drop index RELATIONSHIP_2_FK on REL_COMPRA_LIBRO;

drop table if exists REL_COMPRA_LIBRO;

drop table if exists USUARIO;

/*==============================================================*/
/* Table: AUTOR                                                 */
/*==============================================================*/
create table AUTOR
(
   ID_AUTOR                       int                            not null AUTO_INCREMENT,
   NOMBRES                        char(20),
   APELLIDOS                      char(20),
   primary key (ID_AUTOR)
)
type = InnoDB;

/*==============================================================*/
/* Table: COMPRA                                                */
/*==============================================================*/
create table COMPRA
(
   ID_COMPRA                      int                            not null AUTO_INCREMENT,
   ID_USUARIO                     int,
   SUBTOTAL                       float(8,2),
   IVA                            float(8,2),
   TOTAL                          float(8,2),
   primary key (ID_COMPRA)
)
type = InnoDB;

/*==============================================================*/
/* Index: RELATIONSHIP_1_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_1_FK on COMPRA
(
   ID_USUARIO
);

/*==============================================================*/
/* Table: LIBRO                                                 */
/*==============================================================*/
create table LIBRO
(
   ID_LIBRO                       int                            not null AUTO_INCREMENT,
   ID_AUTOR                       int,
   TITULO                         char(50),
   CATEGORIA                      char(20),
   EDITORIAL                      char(30),
   PRECIO                         float(8,2),
   ISBN                           char(13),
   primary key (ID_LIBRO)
)
type = InnoDB;

/*==============================================================*/
/* Index: RELATIONSHIP_4_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_4_FK on LIBRO
(
   ID_AUTOR
);

/*==============================================================*/
/* Table: REL_COMPRA_LIBRO                                      */
/*==============================================================*/
create table REL_COMPRA_LIBRO
(
   ID_COMPRA                      int                            not null,
   ID_LIBRO                       int                            not null,
   primary key (ID_COMPRA, ID_LIBRO)
)
type = InnoDB;

/*==============================================================*/
/* Index: RELATIONSHIP_2_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_2_FK on REL_COMPRA_LIBRO
(
   ID_COMPRA
);

/*==============================================================*/
/* Index: RELATIONSHIP_3_FK                                     */
/*==============================================================*/
create index RELATIONSHIP_3_FK on REL_COMPRA_LIBRO
(
   ID_LIBRO
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO
(
   ID_USUARIO                     int                            not null AUTO_INCREMENT,
   NICKNAME                       char(20),
   PASS                           text,
   NOMBRE_USUARIO                 char(20),
   APELLIDO_USUARIO               char(20),
   primary key (ID_USUARIO)
)
type = InnoDB;

alter table COMPRA add constraint FK_REL_USUARI_COMPRA foreign key (ID_USUARIO)
      references USUARIO (ID_USUARIO) on delete restrict on update restrict;

alter table LIBRO add constraint FK_REL_LIBRO_AUTOR foreign key (ID_AUTOR)
      references AUTOR (ID_AUTOR) on delete restrict on update restrict;

alter table REL_COMPRA_LIBRO add constraint FK_REL_COMPRA_LIBRO foreign key (ID_COMPRA)
      references COMPRA (ID_COMPRA) on delete restrict on update restrict;

alter table REL_COMPRA_LIBRO add constraint FK_REL_COMPRA_LIBRO2 foreign key (ID_LIBRO)
      references LIBRO (ID_LIBRO) on delete restrict on update restrict;

