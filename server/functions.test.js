const functions=require('./functions')

test('property returns true if is the same role', ()=>{
    expect(functions.isTheSameCharacter('Nebula /',"Nebula /"))
    .toBe(true)
})

test('property returns true if is the same role', ()=>{
    expect(functions.isTheSameCharacter("T'Challa / Black Panther","King T’Challa / Black Panther"))
    .toBe(true)
})

test('property returns true if is the same role', ()=>{
    expect(functions.isTheSameCharacter("N'Jadaka / Erik 'Killmonger' Stevens","Storm / The Human Torch"))
    .toBe(false)
})


test('Return if Marvel movie', ()=>{
    expect(functions.isAvengersMovie("sdfsdf"))
    .toBe(false)
})

test('Return if Marvel movie', ()=>{
    expect(functions.isAvengersMovie(102899))
    .toBe(true)
})

test('Return if Marvel movie', ()=>{
    expect(functions.isAvengersMovie(10299))
    .toBe(false)
})


test('Return character', ()=>{
    expect(functions.isAvengersMovie(10299))
    .toBe(false)
})




