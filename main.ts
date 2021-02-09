while (true) {
    console.log("X:" + input.acceleration(Dimension.X) + "  Y:" + input.acceleration(Dimension.Y) + "  Z:" + input.acceleration(Dimension.Z))
    if (input.acceleration(Dimension.X) > 15) {
        light.setAll(light.rgb(0, 255, 0))
    } else {
        light.setAll(light.rgb(255, 0, 0))
    }
    
}
