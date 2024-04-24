/** @format */

import { generateUUID } from '../utils/uuid';

const theId = generateUUID();

const CATEGORIES = [
    {
        id: `${theId}-accordion-1`,
        name: 'income',
        display_name: 'Income',
        fill: 'black',
        operation: '',
        sub_categories: [
            {
                id: `${theId}-row-1`,
                name: 'your_pay',
                label: 'your take-home pay',
            },
            {
                id: `${theId}-row-2`,
                name: 'your_partners_pay',
                label: 'Your partners take-home pay',
            },
            {
                id: `${theId}-row-3`,
                name: 'bonuses_and_overtime',
                label: 'Bonuses & overtime',
            },
            {
                id: `${theId}-row-4`,
                name: 'income_savings_investments',
                label: 'Income from savings & investments',
            },
            {
                id: `${theId}-row-5`,
                name: 'centerlink_benefits',
                label: 'Centerlink benefits',
            },
            {
                id: `${theId}-row-6`,
                name: 'family_benefits',
                label: 'Family benefit payments',
            },
            {
                id: `${theId}-row-7`,
                name: 'child_support',
                label: 'Child support',
            },
            {
                id: `${theId}-row-8`,
                name: 'income_other',
                label: 'Other',
            },
        ],
    },
    {
        id: `${theId}-accordion-2`,
        name: 'home-utils',
        display_name: 'Home & utilities',
        fill: '#0146f5',
        operation: '-',
        sub_categories: [
            {
                id: `${theId}-row-1`,
                name: 'mortgage_rent',
                label: 'Mortgage & rent',
            },
            {
                id: `${theId}-row-2`,
                name: 'body_corporate_fees',
                label: 'Body corporate fees',
            },
            {
                id: `${theId}-row-3`,
                name: 'council_rates',
                label: 'Council rates',
            },
            {
                id: `${theId}-row-4`,
                name: 'furniture_appliances',
                label: 'Furniture & appliances',
            },
            {
                id: `${theId}-row-5`,
                name: 'renovations_maintenance',
                label: 'Renovations & maintenance',
            },
            {
                id: `${theId}-row-6`,
                name: 'electricity',
                label: 'Electricity',
            },
            {
                id: `${theId}-row-7`,
                name: 'gas',
                label: 'Gas',
            },
            {
                id: `${theId}-row-8`,
                name: 'water',
                label: 'Water',
            },
            {
                id: `${theId}-row-9`,
                name: 'internet',
                label: 'Internet',
            },
            {
                id: `${theId}-row-10`,
                name: 'pay_tv',
                label: 'Pay TV',
            },
            {
                id: `${theId}-row-11`,
                name: 'home_phone',
                label: 'Home phone',
            },
            {
                id: `${theId}-row-12`,
                name: 'mobile',
                label: 'Mobile',
            },
            {
                id: `${theId}-row-13`,
                name: 'home_utils_other',
                label: 'Other',
            },
        ],
    },
    {
        id: `${theId}-accordion-3`,
        name: 'insurance-financial',
        display_name: 'Insurance & financial',
        fill: '#1f1247',
        operation: '-',
        sub_categories: [
            {
                id: `${theId}-row-1`,
                name: 'car_insurance',
                label: 'Car insurance',
            },
            {
                id: `${theId}-row-2`,
                name: 'home_contents_insurance',
                label: 'Home & contents insurance',
            },
            {
                id: `${theId}-row-3`,
                name: 'personal_life_insurance',
                label: 'Personal & life insurance',
            },
            {
                id: `${theId}-row-4`,
                name: 'health_insurance',
                label: 'Health insurance',
            },
            {
                id: `${theId}-row-5`,
                name: 'car_loan',
                label: 'Car loan',
            },
            {
                id: `${theId}-row-6`,
                name: 'credit_card_interest',
                label: 'Credit card interest',
            },
            {
                id: `${theId}-row-7`,
                name: 'other_loans',
                label: 'Other loans',
            },
            {
                id: `${theId}-row-8`,
                name: 'paying_off_debt',
                label: 'Paying off debt',
            },
            {
                id: `${theId}-row-9`,
                name: 'savings',
                label: 'Savings',
            },
            {
                id: `${theId}-row-10`,
                name: 'investments_super_contributions',
                label: 'Investments & super contributions',
            },
            {
                id: `${theId}-row-11`,
                name: 'charity_donations',
                label: 'Charity donations',
            },
            {
                id: `${theId}-row-12`,
                name: 'insurance-financial_other',
                label: 'Other',
            },
        ],
    },
    {
        id: `${theId}-accordion-4`,
        name: 'groceries',
        display_name: 'Groceries',
        fill: '#383a7b',
        operation: '-',
        sub_categories: [
            {
                id: `${theId}-row-1`,
                name: 'supermarket',
                label: 'Supermarket',
            },
            {
                id: `${theId}-row-2`,
                name: 'butcher',
                label: 'Butcher',
            },
            {
                id: `${theId}-row-3`,
                name: 'fruit_veg_market',
                label: 'Fruit & veg market',
            },
            {
                id: `${theId}-row-4`,
                name: 'fish_shop',
                label: 'Fish shop',
            },
            {
                id: `${theId}-row-5`,
                name: 'deli_bakery',
                label: 'Deli & bakery',
            },
            {
                id: `${theId}-row-6`,
                name: 'pet_food',
                label: 'Pet food',
            },
            {
                id: `${theId}-row-7`,
                name: 'groceries_other',
                label: 'Other',
            },
        ],
    },
    {
        id: `${theId}-accordion-5`,
        name: 'personal-medical',
        display_name: 'Personal & medical',
        fill: '#c0c6e2',
        operation: '-',
        sub_categories: [
            {
                id: `${theId}-row-1`,
                name: 'cosmetics_toiletries',
                label: 'Cosmetics & toiletries',
            },
            {
                id: `${theId}-row-2`,
                name: 'hair_beauty',
                label: 'Hair & beauty',
            },
            {
                id: `${theId}-row-3`,
                name: 'medicines_pharmacy',
                label: 'Medicines & pharmacy',
            },
            {
                id: `${theId}-row-4`,
                name: 'glasses_eye_care',
                label: 'Glasses & eye care',
            },
            {
                id: `${theId}-row-5`,
                name: 'dental',
                label: 'Dental',
            },
            {
                id: `${theId}-row-6`,
                name: 'doctors_medical',
                label: 'Doctors & medical',
            },
            {
                id: `${theId}-row-7`,
                name: 'hobbies',
                label: 'Hobbies',
            },
            {
                id: `${theId}-row-8`,
                name: 'clothing_shoes',
                label: 'Clothing & shoes',
            },
            {
                id: `${theId}-row-9`,
                name: 'savings',
                label: 'Savings',
            },
            {
                id: `${theId}-row-10`,
                name: 'jewellery_accessories',
                label: 'Jewellery & accessories',
            },
            {
                id: `${theId}-row-11`,
                name: 'computers_gadgets',
                label: 'Computers & gadgets donations',
            },
            {
                id: `${theId}-row-12`,
                name: 'sports_gym',
                label: 'Sports & gym',
            },
            {
                id: `${theId}-row-13`,
                name: 'education',
                label: 'Education',
            },
            {
                id: `${theId}-row-14`,
                name: 'pet_care_vet',
                label: 'Pet care & vet',
            },
            {
                id: `${theId}-row-15`,
                name: 'personal_medical_other',
                label: 'Other',
            },
        ],
    },
    {
        id: `${theId}-accordion-6`,
        name: 'entertainment-eat-out',
        display_name: 'Entertainment & eat-out',
        fill: '#ace8fa',
        operation: '-',
        sub_categories: [
            {
                id: `${theId}-row-1`,
                name: 'coffee_tea',
                label: 'Coffee & tea',
            },
            {
                id: `${theId}-row-2`,
                name: 'lunches_bought',
                label: 'Lunches - bought',
            },
            {
                id: `${theId}-row-3`,
                name: 'take-away_snacks',
                label: 'Take-away & snacks',
            },
            {
                id: `${theId}-row-4`,
                name: 'cigarettes',
                label: 'Cigarettes',
            },
            {
                id: `${theId}-row-5`,
                name: 'drinks_alcohol',
                label: 'Drinks & alcohol',
            },
            {
                id: `${theId}-row-6`,
                name: 'bars_clubs',
                label: 'Bars & clubs',
            },
            {
                id: `${theId}-row-7`,
                name: 'restaurants',
                label: 'Restaurants',
            },
            {
                id: `${theId}-row-8`,
                name: 'books',
                label: 'Books',
            },
            {
                id: `${theId}-row-9`,
                name: 'newspaper_magazines',
                label: 'Newspaper & magazines',
            },
            {
                id: `${theId}-row-10`,
                name: 'movies_music',
                label: 'Movies & music',
            },
            {
                id: `${theId}-row-11`,
                name: 'holidays',
                label: 'Holidays',
            },
            {
                id: `${theId}-row-12`,
                name: 'celebrations_gifts',
                label: 'Celebrations & gifts',
            },
            {
                id: `${theId}-row-13`,
                name: 'entertainment_other',
                label: 'Other',
            },
        ],
    },
    {
        id: `${theId}-accordion-7`,
        name: 'transport-auto',
        display_name: 'Transport & auto',
        fill: '#c3eefa',
        operation: '-',
        sub_categories: [
            {
                id: `${theId}-row-1`,
                name: 'bus_train_ferry',
                label: 'Bus & train & ferry',
            },
            {
                id: `${theId}-row-2`,
                name: 'petrol',
                label: 'Petrol',
            },
            {
                id: `${theId}-row-3`,
                name: 'road_tolls_parking',
                label: 'Road tolls & parking',
            },
            {
                id: `${theId}-row-4`,
                name: 'rego_licence',
                label: 'Rego & licence',
            },
            {
                id: `${theId}-row-5`,
                name: 'repairs_maintenance',
                label: 'Repairs & maintenance',
            },
            {
                id: `${theId}-row-6`,
                name: 'fines',
                label: 'Fines',
            },
            {
                id: `${theId}-row-7`,
                name: 'airfares',
                label: 'Airfares',
            },
            {
                id: `${theId}-row-8`,
                name: 'transport_other',
                label: 'Other',
            },
        ],
    },
    {
        id: `${theId}-accordion-8`,
        name: 'children',
        display_name: 'Children',
        fill: '#a3bbf9',
        operation: '-',
        sub_categories: [
            {
                id: `${theId}-row-1`,
                name: 'baby_products',
                label: 'Baby products',
            },
            {
                id: `${theId}-row-2`,
                name: 'toys',
                label: 'Toys',
            },
            {
                id: `${theId}-row-3`,
                name: 'babysitting',
                label: 'Babysitting',
            },
            {
                id: `${theId}-row-4`,
                name: 'childcare',
                label: 'Childcare',
            },
            {
                id: `${theId}-row-5`,
                name: 'sports_activities',
                label: 'Sports & activities',
            },
            {
                id: `${theId}-row-6`,
                name: 'school_fees',
                label: 'School fees',
            },
            {
                id: `${theId}-row-7`,
                name: 'excursions',
                label: 'Excursions',
            },
            {
                id: `${theId}-row-8`,
                name: 'school_uniforms',
                label: 'School uniforms',
            },
            {
                id: `${theId}-row-9`,
                name: 'other_school_needs',
                label: 'Other school needs',
            },
            {
                id: `${theId}-row-10`,
                name: 'child_support_payment',
                label: 'Child support payment',
            },
            {
                id: `${theId}-row-11`,
                name: 'children_other',
                label: 'Other',
            },
        ],
    },
];

export default CATEGORIES;
