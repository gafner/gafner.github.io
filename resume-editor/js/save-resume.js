var SaveResume = function(firebase, builder) {

    var database = firebase.database();

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    function setGuid() {
        var user_guid = guid();
        localStorage.setItem('user_guid', JSON.stringify(user_guid));
        return guid
    }

    function saveJson(json) {
        var user_guid = localStorage.getItem('user_guid');
        if (!user_guid) {
            user_guid = setGuid();
        }
        var promise = userResumeJson.set(json);
        return true;
    }

    var user_guid = localStorage.getItem('user_guid');
    if (!user_guid) {
        user_guid = setGuid();
    }

    var userResumeJson = database.ref('resume/' + user_guid);
    userResumeJson.on('value', function(snapshot) {
        console.log('snapshot', snapshot.val());
		if(snapshot.val() !== null) {
			builder.setFormValues(snapshot.val());
		}
    });

	return saveJson
}
