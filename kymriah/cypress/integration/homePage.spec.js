describe("Kymriah Home page", () => {
  it("Check login widget label behavior", () => {
    cy.visit('/', {
		  timeout: 100000, // increase total time for the visit to resolve
		  onBeforeLoad: function(contentWindow){
			// contentWindow is the remote page's window object
		  },
		  onLoad: function(contentWindow){
			// contentWindow is the remote page's window object
		  }
		})
	//#etxtUserID
	cy.get('ul>li:nth-child(1)>a>div>span:nth-child(1)')
		.should('have.text', 'Adult Diffuse Large B-cell Lymphoma');


  });
});