import { Params } from '@feathersjs/feathers';
import { Stripe } from 'stripe';
import Base from './base';
export default class Service extends Base {
    find: (params: Params) => Promise<Stripe.Response<Stripe.ApiList<Stripe.PaymentMethod>>>;
    get: (id: string) => Promise<Stripe.Response<Stripe.PaymentMethod>>;
    create: (data: Stripe.PaymentMethodCreateParams) => Promise<Stripe.Response<Stripe.PaymentMethod>>;
    patch: (args_0: any, args_1: any) => Promise<Stripe.Response<Stripe.PaymentMethod>>;
    update: (id: string, data: any) => Promise<Stripe.Response<Stripe.PaymentMethod>>;
    remove: (id: string, params: Params) => Promise<Stripe.Response<Stripe.PaymentMethod>>;
}
