while (true) {
    console.log("X:" + input.acceleration(Dimension.X) + "  Y:" + input.acceleration(Dimension.Y) + "  Z:" + input.acceleration(Dimension.Z))
    if (input.acceleration(Dimension.Z) > 25) {
        light.setAll(light.rgb(255, 0, 0))
    } else {
        light.clear()
    }
    
}
