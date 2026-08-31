import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Plan {
  name: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonClass: string;
}

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {

  selectedPlan: string = '';

  plans: Plan[] = [

    // {
    //     name: 'Free Plan',
    //     price: 0,
    //     duration: 'Forever',
    //     description: 'Basic access to our platform',
    //     features: [
    //         'View limited profiles',
    //         'Send limited interest requests',
    //         'Receive limited interest requests',
    //         'Basic profile access'
    //     ],
    //     buttonClass: 'Current Plan'
    // },

    {
      name: 'Basic Plan',
      price: 99,
      duration: '1 Month',
      description: 'Perfect for getting started',

      features: [
        'View basic profiles',
        'Send interest requests',
        'Receive interest requests',
        'Limited contact details'
      ],

      buttonClass: 'basic-button'
    },

    {
      name: 'Premium Plan',
      price: 299,
      duration: '5 Months',
      description: 'Most popular choice',

      popular: true,

      features: [
        'View all profiles',
        'Send unlimited interests',
        'Receive unlimited interests',
        'View contact details',
        'Priority profile listing',
        'Ad-free experience'
      ],

      buttonClass: 'premium-button'
    },

    {
      name: 'Deluxe Plan',
      price: 599,
      duration: '12 Months',
      description: 'Best value for serious members',

      features: [
        'All Premium features',
        'Verified badge',
        'Featured in search',
        'See who viewed your profile',
        'Priority customer support',
        'Profile boost (more visibility)'
      ],

      buttonClass: 'deluxe-button'
    }

  ];


  choosePlan(plan: Plan): void {

    this.selectedPlan = plan.name;

    console.log('Selected Plan:', plan);

    /*
      Later connect your payment API here.

      Example:

      this.paymentService
        .createPayment(plan)
        .subscribe(response => {
          ...
        });

    */
  }


  getFeatureIcon(index: number): string {

    const icons = [
      '✓',
      '✓',
      '✓',
      '✓',
      '✓',
      '✓'
    ];

    return icons[index] || '✓';
  }

}