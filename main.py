while True:
    print ("X:" + input.acceleration(Dimension.X) + "  Y:" + input.acceleration(Dimension.Y) + "  Z:" + input.acceleration(Dimension.Z))
    if input.acceleration(Dimension.X) > 15:
        light.set_all(light.rgb(0,255,0))
    else:
        light.set_all(light.rgb(255,0,0))


