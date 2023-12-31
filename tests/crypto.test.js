const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const axios = require("axios");
const express = require("express");
const cors = require("cors");
const router = require("../routes/crypto");
require("dotenv").config();

chai.use(chaiHttp);
const app = express();
app.use(express.json());
app.use(cors());
const expect = chai.expect;

describe("Currency API", () => {
  before(() => {
    app.use("/", router);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("GET /currencies", () => {
    it("should return supported currencies", (done) => {
      chai
        .request(app)
        .get("/currencies")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          done();
        });
    });

    it("should handle errors", (done) => {
      sinon.stub(axios, "get").rejects(new Error("Some error"));
      chai
        .request(app)
        .get("/currencies")
        .end((err, res) => {
          expect(res).to.have.status(500);
          expect(res.text).to.equal("Some error occured!");
          done();
        });
    });
  });

  describe("POST /top", () => {
    it("should return top markets", (done) => {
      chai
        .request(app)
        .post("/top")
        .send({ currency: "USD" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          done();
        });
    });

    it("should handle errors", (done) => {
      sinon.stub(axios, "get").rejects(new Error("Some error"));
      chai
        .request(app)
        .post("/top")
        .send({ currency: "USD" })
        .end((err, res) => {
          expect(res).to.have.status(500);
          expect(res.text).to.equal("Some error occured!");
          done();
        });
    });
  });

  describe("POST /convert", () => {
    it("should return converted amount", (done) => {
      chai
        .request(app)
        .post("/convert")
        .send({ fromCurrency: "BITCOIN", toCurrency: "USD", amount: 1 })
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it("should handle errors", (done) => {
      sinon.stub(axios, "get").rejects(new Error("Some error"));
      chai
        .request(app)
        .post("/convert")
        .send({ fromCurrency: "BITCOIN", toCurrency: "USD", amount: 1 })
        .end((err, res) => {
          expect(res).to.have.status(500);
          expect(res.text).to.equal("Some error occured!");
          done();
        });
    });
  });
});
