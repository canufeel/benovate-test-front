import Ember from 'ember';
import ENV from 'benov-front/config/environment';
import ErrorSuccessMixin from 'benov-front/mixins/error-success';

const {
	set,
	get,
	computed,
	isEqual,
	$,
	isEmpty,
	getProperties,
} = Ember;
const {and,notEmpty,not} = computed;

export default Ember.Component.extend(ErrorSuccessMixin, {
	store: Ember.inject.service(),
	query: '',
	innSuggestions: computed('query',{
		get(){
			let promise = new Promise(resolve=>{
				let query = get(this,'query');
				if (isEqual(query,'')) {
					resolve('');
				} else {
					let request = $.get(`${ENV.APP.API_HOST}/${ENV.APP.API_NAMESPACE}/innaccuser`,{query:query});
					request.then((result)=>{
						let firstObject = get(result,'firstObject');
						resolve(Ember.A([firstObject]));
					});
				}
			});
			return promise;
		}
	}),

	amountValid: notEmpty('amount'),
	recieverValid: notEmpty('reciever'),
	senderValid: notEmpty('sender'),
	sendEnabled: and('amountValid','recieverValid','senderValid'),
	sendDisabled: not('sendEnabled'),
	actions: {
		send(){
			let {
				reciever,
				sender,
				amount,
				store
			} = getProperties(this,
				['reciever','sender','amount','store']);
			let data = {
				from_inn:get(sender,'inn'),
				to_inn:get(reciever,'inn'),
				amount:amount
			}
			let request = $.post(`${ENV.APP.API_HOST}/${ENV.APP.API_NAMESPACE}/transaction`,data);
			request.then((result)=>{
				set(this,'succeed',true);
				this.attrs.reloadModel();
			},errors=>{
				set(this,'errored',true);
			});
		},
		requestInn(value){
			set(this,'query',value);
		}
	}
});
