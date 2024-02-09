var  cricketWorldCupWinners = [
    { team: "WestIndies", yearsWon: [1975, 1979] },
    { team: "India", yearsWon: [1983, 2011] },
    { team: "Australia", yearsWon: [1987, 1999, 2003, 2007, 2015,2023] },
    { team: "Pakistan", yearsWon: [1992]},
    { team: "SriLanka", yearsWon: [1996]},
    { team: "England", yearsWon:[2019]}
  ];

//   team with number of worldcup

// cricketWorldCupWinners.forEach(t=>console.log(t.team,t.yearsWon.length));

// which all team win in 19's

var st= new Set()
for(let t of cricketWorldCupWinners){
    let year=t.yearsWon
    for(let y of year){
        if(y<2000){
            st.add(t.team)

        }
    }
}
console.log(st);