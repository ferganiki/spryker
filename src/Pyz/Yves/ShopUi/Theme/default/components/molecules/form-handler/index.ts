import register from 'ShopUi/app/registry';
export default register('form-handler', () => import(
    /* webpackMode: "lazy" */
    /* webpackChunkName: "form-handler" */
    './form-handler'));
