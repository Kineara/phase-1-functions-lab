const hqLocation = 42;
const blockLengthInFt = 264;

function distanceFromHqInBlocks(pickupLocation){
    return Math.abs(hqLocation - pickupLocation);
};

function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) * blockLengthInFt;
};

function distanceTravelledInFeet(pickupBlock, dropoffBlock){
    return (Math.abs(pickupBlock - dropoffBlock) * blockLengthInFt);
};

function calculatesFarePrice(pickupBlock, dropoffBlock){
    let distInFeet = distanceTravelledInFeet(pickupBlock, dropoffBlock);
    if (distInFeet > 2500){
        return 'cannot travel that far';
    } else if (distInFeet > 2000){
        return 25;
    } else if (distInFeet > 400) {
        return (distInFeet - 400) * .02;
    } else {
        return 0;
    }
    
};