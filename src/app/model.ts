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
    public id: number;
    public personneType: string;
    public civilite: Civilite;
    public nom: string;
    public prenom: string;
    public email: string;
    public telephone: string;
    public adresseId?: number;
    public adresse: Adresse;

    constructor(id: number, civilite: Civilite, nom: string, prenom: string, email: string, telephone: string) {
        this.id = id;
        this.civilite = civilite;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
    }
}

export enum Civilite {
    M = "M",
    MME = "MME",
    MLLE = "MLLE"
}

export class Adresse {
    public id: number;
    public rue: string;
    public codePostal: string;
    public ville: string;

    constructor(id: number, rue: string, codePostal: string, ville: string) {
        this.id = id;
        this.rue = rue;
        this.codePostal = codePostal;
        this.ville = ville;
    }
}

export class Stagiaire extends Personne {
    public dateNaissance: string;
    public checked: boolean;

    constructor(id?: number, civilite?: Civilite, nom?: string, prenom?: string, email?: string, telephone?: string, dateNaissance?: string) {
        super(id, civilite, nom, prenom, email, telephone);
        this.dateNaissance = dateNaissance;
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
    public id: number;
    public intitule: string;
    public dateDebut: string;
    public dateFin: string;
    public stagiaires: Array<Stagiaire> = new Array<Stagiaire>();


    constructor(id?: number, intitule?: string, dateDebut?: string, dateFin?: string, stagiaires?: Array<Stagiaire>) {
        this.id = id;
        this.intitule = intitule;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.stagiaires = stagiaires;
    }
}