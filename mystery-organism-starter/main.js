// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const mockUp = mockUpStrand();
//console.log(mockUp)

const pAequorFactory = (num,array) => {
  return {
    _specimenNum: num/*()*/,
    _dna: array,
    get dna() {
      return this._dna;
    },
    get specimenNum() {
      return this._specimenNum;
    },
    set dna(newDNA) {
      this._dna = newDNA;
    },
    mutate() {
      let newStrand = this.dna;
      let randomIndex = Math.floor(Math.random() * 16)
      let rand1 = Math.floor(Math.random() * 4)
      const dnaBases = ['A', 'T', 'C', 'G']
      const wildcard = ['P']
      if (newStrand[randomIndex] === dnaBases[rand1]) {

        newStrand.splice(randomIndex,1,wildcard[0])

        console.log('original is: ' + dnaBases[rand1]  + ' at: [' + randomIndex + '], replaced by: ' + newStrand[randomIndex] + '. case: 0')

      } else if (newStrand[randomIndex] !== dnaBases[rand1]) {

        console.log('original is: ' + newStrand[randomIndex] + ' at: [' + randomIndex + '], replaced by: ' + dnaBases[rand1] + '. case: 1')

        newStrand.splice(randomIndex,1,dnaBases[rand1])

      } 
      this.dna = newStrand;
      return newStrand
      },
      compare(organism2){
        let own = this.dna;
        let other = organism2.dna;
        let matches = [];
        for (let i = 0; i < own.length; i++) {
          for (let j = 0; j < other.length; j++) {
            if (own[i] === other [j]) {
              matches.push(other[j])
            }else {
              break;
            }
          }
        }
        const percentage = Math.floor((matches.length * 100) / 15);
        console.log(`${this.specimenNum} (Organism 1) shares a ${percentage}% match with ${organism2.specimenNum} (Organism 2).`)
      },
      willLikelySurvive() {
        let bases = this.dna;
        let result = [];
        for (let i = 0; i < bases.length; i++) {
          if ((bases[i] === 'C') || (bases[i] === 'G')) {
            result.push(bases[i]);
          } else if ((bases[i] !== 'C') || (bases[i] !== 'G')){
            continue;
          }
        }
        const percentage = Math.floor((result.length * 100) / 15);
        return percentage;
      } 
  }
};



const number = () => {
  return Math.floor(Math.random() * 10);
}

const organism1 = pAequorFactory(number,mockUp);
const organism2 = pAequorFactory(number,mockUp)


let i = 1;
/*let success = [];
  while (success.length < 30) {
    let org = pAequorFactory(i,mockUp);
    if (org.willLikelySurvive() < 60) {
      success.push(org)
    }
    i++;
  }*/
  

//console.log('Original: ' + organism1.dna)

//organism1.mutate()

//console.log('Changed: ' + organism1.dna)

let index = 1;
while (index < 10) {
  index++;
  i++;
  let org = pAequorFactory(i,mockUp)
  console.log('Original: ' + org.dna)

  org.mutate()

  console.log('Changed: ' + org.dna + '\n')
}

//console.log(organism1.specimenNum);
//console.log(organism2.specimenNum);
//organism1.compare(organism2)

//console.log(organism1.willLikelySurvive());

//console.log(success);

// cd Challenges/mystery-organism-starter
