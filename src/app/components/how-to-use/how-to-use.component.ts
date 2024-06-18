import { Component } from '@angular/core';
import { Titreh1Component } from '../titres/titreh1/titreh1.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-how-to-use',
  standalone: true,
  imports: [ NgFor, NgIf, Titreh1Component ],
  templateUrl: './how-to-use.component.html',
  styleUrl: './how-to-use.component.scss'
})
export class HowToUseComponent {
  data:any = [
    {
      paragraphe: "Choisissez la catégorie d'artisanat qui vous intéresse",
      sousParagraphe: [
        "Dans le menu principal, vous trouverez une liste de différentes catégories d'artisanat, telles que le bâtiment, les services, la fabrication ou encore l'alimentation.",
        "Cliquez sur la catégorie qui correspond à vos besoins."
      ]
    },
    {
      paragraphe: "Sélectionnez un artisan",
      sousParagraphe: [
        "Une fois dans la catégorie choisie, vous aurez accès à une liste d'artisans locaux spécialisés dans ce domaine.",
        "Parcourez les profils des artisans, découvrez leurs réalisations et leurs spécialités.",
        "Cliquez sur le profil de l'artisan qui vous semble le plus approprié pour votre projet."
      ]
    },
    {
      paragraphe: "Contactez l'artisan via le formulaire de contact",
      sousParagraphe: [
        "Sur la page de profil de l'artisan, vous trouverez un formulaire de contact.",
        "Remplissez les champs requis, tels que votre nom, votre adresse e-mail et une description détaillée de votre projet ou de votre demande.",
        "N'hésitez pas à fournir autant de détails que possible pour permettre à l'artisan de mieux comprendre vos besoins."
      ]
    },
    {
      paragraphe: "Recevez une réponse sous 48 heures",
      sousParagraphe: [
        "Une fois votre demande envoyée, l'artisan la recevra et l'examinera attentivement.",
        "Dans un délai maximum de 48 heures, vous recevrez une réponse de l'artisan concernant votre projet.",
        "Vous pourrez alors discuter des détails, des délais, des prix et de toute autre question pertinente avec l'artisan."
      ]
    }
  ]
}
