// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (id, strand) => {
  return {
    specimenNum: id,
    dna: strand,

    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const prevValue = this.dna[randomIndex];

      while (this.dna[randomIndex] === prevValue)
        this.dna[randomIndex] = returnRandBase();

      return this.dna;
    },

    compareDNA(pAequor) {
      let commonBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) commonBases++;
      }

      console.log(
        `Specimen ${this.specimenNum} and specimen ${
          pAequor.specimenNum
        } have ${((commonBases / this.dna.length) * 100).toFixed(
          2
        )}% DNA in common.`
      );
    },

    willLikelySurvive() {
      return (
        this.dna.filter((base) => base === 'C' || base === 'G').length /
          this.dna.length >
        0.6
      );
    },

    completeStrand() {
      return this.dna.map((base) => {
        switch (base) {
          case 'A':
            return 'T';
          case 'T':
            return 'A';
          case 'C':
            return 'G';
          case 'G':
            return 'C';
        }
      });
    },
  };
};
////////////////////////////////////////////
//
const pAequorArr = [];
for (let i = 0; i <= 30; i++)
  pAequorArr.push(pAequorFactory(i, mockUpStrand()));

console.log(pAequorArr[0]);
console.log(pAequorArr[0].willLikelySurvive());
console.log(pAequorArr[0].mutate());
console.log(pAequorArr[0].completeStrand());
console.log();

pAequorArr[0].compareDNA(pAequorArr[1]);
// console.log(mockUpStrand());
