function extractValue(arr, key) {
    return arr.reduce(function(accumulator, next) {
        accumulator.push(next[key])
        return keyValues[key]
    }, []);
}

// I assume that empty array is there because that's where you put an empty array you're going to push things onto using reduce, rather than declare an empty array as a variable right after the first line of the function - is that right?

function vowelCount(str) {
    const vowels = 'aeiou';
    return str.split('').reduce(function(accumulator, next) {
        let lowerCased = next.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1) {
            if(accumulator[lowerCased]) {
                accumulator[lowerCased]++;
            } else {
                accumulator[lowerCased] = 1;
            }
        }
        return accumulator;
    }, {})
}

// so accumulator in this case is the empty object?
// I'm not straight on how to signify keys and values of an object in code like this. accumulator[lowerCased] - that's the value to the key?

function addKeyAndValue (arr, key, value) {
    return arr.reduce(function(acc,next,idx) {
        acc[idx][key] = value;
        return acc;
    }, acc);
}
// We're not setting the value explicitly it seems, just the key. Why do we only have to do one?

function partition(arr, cb) {
    return arr.reduce(function(acc,next) {
        if(cb(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
    }, [[], []]);
}
// Will need to go over this one. 
// cb(next) - I'm sure that's the next value in the array we're working with, but I'm not sure why cb(next) signifies that
// basic question - if(cb(next)) means "if truthy" right?
// how is that if/else pushing the result into one array or the other? 
// in the videos (or somewhere else I was reading, not sure), it said that when you put something where that array of two arrays is here, you're initializing the reduce method with that thing. Maybe I don't understand what initialize means, because I don't understand how that array is "initializing" anything.