import Ember from 'ember';
import ErrorSuccessMixin from 'benov-front/mixins/error-success';

const {getProperties,computed,set} = Ember;
const {notEmpty,and,not} = computed;

export default Ember.Component.extend(ErrorSuccessMixin, {
	store: Ember.inject.service(),
	inn: "",
	amount: "",
	innValid: notEmpty('inn'),
	amountValid: notEmpty('amount'),
	isCreateEnabled: and('innValid','amountValid'),
	isCreateDisabled: not('isCreateEnabled'),
	actions: {
		createUser(){
			let {inn,amount,store} = getProperties(this,
				['inn','amount','store']);
			let record = store.createRecord('innaccuser',{
				inn:inn,
				account:amount,
			});
			record.save().then(result=>{
				set(this,'succeed',true);
				this.attrs.reloadModel();
			},error=>{
				set(this,'errored',true);
			});
		}
	}
});
