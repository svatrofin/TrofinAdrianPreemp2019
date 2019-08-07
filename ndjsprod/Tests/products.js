const app = require("../app");
const request = require("supertest");

describe("GET /products", function() {
  it("Should be with products", function(done) {
    request(app)
      .get("/products")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /products/id", function() {
    it("Should call product #", function(done) {
      request(app)
        .get("/products/1")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
});

describe("GET /categories", function() {
    it("Should call Cateogories", function(done) {
      request(app)
        .get("/categories")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
});

