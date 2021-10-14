export class Matiere {
    public id: number;
    public titre: string;
    public duree: number;
    public objectifs: string;
    public preRequis: string;
    public programme: string;
    public formateurs: Array<Formateur>;
    public checked: boolean;

    constructor(id?: number, titre?: string, duree?: number, objectifs?: string, preRequis?: string, programme?: string) {
        this.id = id;
        this.titre = titre;
        this.duree = duree;
        this.objectifs = objectifs;
        this.preRequis = preRequis;
        this.programme = programme;
        this.formateurs = new Array<Formateur>();
    }
}


export class Personne {
    public Id: number;
    public PersonneType: string;
    public Civilite: Civilite;
    public Nom: string;
    public Prenom: string;
    public Email: string;
    public Telephone: string;
    public AdresseId?: number;
    public Adresse: Adresse;

    constructor(id: number, civilite: Civilite, nom: string, prenom: string, email: string, telephone: string) {
        this.Id = id;
        this.Civilite = civilite;
        this.Nom = nom;
        this.Prenom = prenom;
        this.Email = email;
        this.Telephone = telephone;
    }
}

export enum Civilite {
    M = "M",
    MME = "MME",
    MLLE = "MLLE"
}

export class Adresse {
    public Id: number;
    public Rue: string;
    public CodePostal: string;
    public Ville: string;

    constructor(id: number, rue: string, codePostal: string, ville: string) {
        this.Id = id;
        this.Rue = rue;
        this.CodePostal = codePostal;
        this.Ville = ville;
    }
}

export class Stagiaire extends Personne {
    public DateNaissance: string;
    public Checked: boolean;

    constructor(id?: number, civilite?: Civilite, nom?: string, prenom?: string, email?: string, telephone?: string, dateNaissance?: string) {
        super(id, civilite, nom, prenom, email, telephone);
        this.DateNaissance = dateNaissance;
    }
}

export class Formateur {
    public id: number;
    public externe: boolean;
    public nom : string;
    public prenom : string;
    public email : string;
    public competences: Array<FormateurMatiereVM> = new Array<FormateurMatiereVM>();

    constructor(id?: number, externe?: boolean, competences?: Array<FormateurMatiereVM>) {
        this.id = id;
        this.externe = externe;
        this.competences = competences;
    }
}

export class FormateurMatiereVM {
    public matiereId : number;
    public titre : string;

    constructor(){

    }
}


export class Cursus {
    public Id: number;
    public Intitule: string;
    public DateDebut: string;
    public DateFin: string;
    public Stagiaires: Array<Stagiaire> = new Array<Stagiaire>();


    constructor(id?: number, intitule?: string, dateDebut?: string, dateFin?: string, stagiaires?: Array<Stagiaire>) {
        this.Id = id;
        this.Intitule = intitule;
        this.DateDebut = dateDebut;
        this.DateFin = dateFin;
        this.Stagiaires = stagiaires;
    }
}