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
    public Id: number;
    public PersonneType: string;
    public Civilite: Civilite;
    public Nom: string;
    public Prenom: string;
    public Email: string;
    public Telephone: string;
    public AdresseId?: number;
    public Adresse: Adresse;

    constructor(id: number, civilite: Civilite, nom: string, prenom: string, email: string, telephone: string){
        this.Id = id;
        this.Civilite = civilite;
        this.Nom = nom;
        this.Prenom = prenom;
        this.Email = email;
        this.Telephone = telephone;
    }
}

export enum Civilite {
    M,
    MME,
    MLLE
}

export class Adresse {
    public Id: number;
    public Rue: string;
    public CodePostal: string;
    public Ville: string;

    constructor(id: number, rue: string, codePostal: string, ville: string){
        this.Id = id;
        this.Rue = rue;
        this.CodePostal = codePostal;
        this.Ville = ville;
    }
}

export class Stagiaire extends Personne{
    public DateNaissance: Date;

    constructor(id: number, civilite: Civilite, nom: string, prenom: string, email: string, telephone: string, dateNaissance: Date){
        super(id, civilite, nom, prenom, email, telephone);
        this.DateNaissance = dateNaissance;
    }
}

export class Formateur {
    public Id : number;
    public Externe : boolean;
    public Competences : Array<Matiere> = new Array<Matiere>();
}