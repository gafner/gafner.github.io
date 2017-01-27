var SaveResume = function(editorId, firebase, builder, reset) {
    var database = firebase.database();

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    function setGuid() {
        var user_guid = editorId ? editorId + '_' + guid() : guid();
        localStorage.setItem('user_guid', user_guid);
        return user_guid
    }

    function saveResume(json) {
        var user_guid = localStorage.getItem('user_guid');
        if (!user_guid) {
            user_guid = setGuid();
        }
        return userResumeJson.set(json);
    }

    var user_guid = localStorage.getItem('user_guid');
    if (!user_guid) {
        user_guid = setGuid();
    }

    var userResumeJson = database.ref('resume/' + user_guid);
    userResumeJson.on('value', function(snapshot) {
		if(snapshot.val() !== null) {
			console.log('snapshot.val()', snapshot.val())
			builder.setFormValues(snapshot.val());
		}else {
			reset()
		}
    });

	return saveResume
}
