describe("fixHooks for touches object", function() {

	it("should be set hooks", function() {
		// Given
		// When
		var touchTypes = [ "start", "move", "end" ], touch = "touch";
		
		// Then
		for (var i = 0; i < touchTypes.length; i++) {
			expect(jQuery.event.fixHooks[touch+touchTypes[i]].props).toEqual(
				[ "changedTouches", "targetTouches", "touches" ]
			);
		};
	});
});