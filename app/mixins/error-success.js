import Ember from 'ember';

const {set} = Ember;

export default Ember.Mixin.create({
	errored:false,
	succeed:false,
	actions: {
		clearError(){
			set(this,'errored',false);
		},
		clearSuccess(){
			set(this,'succeed',false);
		}
	}
});
