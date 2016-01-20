( function() {
	var touchTypes = [ "start", "move", "end" ],
		touchType,
		fixHooks = jQuery.event.fixHooks;

	if ( fixHooks ) {
		for ( var i = 0; i < touchTypes.length; i++ ) {
			touchType = "touch" + touchTypes[ i ];
			if ( !fixHooks[ touchType ] ) {
				fixHooks[ touchType ] = {};
				fixHooks[ touchType ].props = fixHooks[ touchType ].props || [];
			}

			fixHooks[ touchType ].props =
				fixHooks[ touchType ].props.concat(
					[ "changedTouches", "targetTouches", "touches" ]
				);
		};
	}
} )();
