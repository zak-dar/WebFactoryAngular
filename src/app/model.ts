export class Matiere {
    public Id: number;
    public Titre: string;
    public Duree: number;
    public Objectifs: string;
    public PreRequis: string;
    public Programme: string;

    constructor(id?: number, titre?: string, duree?: number, objectifs?: string, preRequis?: string, programme?: string) {
        this.Id = id;
        this.Titre = titre;
        this.Duree = duree;
        this.Objectifs = objectifs;
        this.PreRequis = preRequis;
        this.Programme = programme;
    }
}

export class Cursus
{
    public Id:number;   
    public Intitule:string; 
    public DateDebut:Date; 
    public DateFin :Date;
    public Stagiaires:Array<Stagiaire> = new Array<Stagiaire>();
    
    constructor(id?: number,intitule?:string, dateDebut?:Date, dateFin?:Date)
    {
        this.Id=id;
        this.Intitule = intitule;
        this.DateDebut = dateDebut;
        this.DateFin = dateFin;
    }
}

export class Personne{

}

export class Stagiaire extends Personne{

}