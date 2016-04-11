import Ember from 'ember';

const {get,set} = Ember;

export default Ember.Controller.extend({
	store: Ember.inject.service(),
	actions: {
		reloadModel(){
			let store = get(this,'store');
			let users = store.findAll('innaccuser');
			set(this,'model',users);
		}
	}
});
